import { useEffect, useState } from 'react';

const authHeader = (token) => (token ? { Authorization: `Bearer ${token}` } : {});

const defaulOptions = {
  afterPull: (data) => data,
  beforePush: (data) => data,
};

const useGitHubContent = (owner, repository, path, { token, initialContent, afterPull, beforePush, branch } = {}) => {
  afterPull = afterPull ?? defaulOptions.afterPull;
  beforePush = beforePush ?? defaulOptions.beforePush;

  const [content, setContent] = useState(initialContent);
  const [sha, setSha] = useState();
  const [isFetching, setFetching] = useState(false);
  const [isUpToDate, setUpToDate] = useState(true);

  let target = `https://api.github.com/repos/${owner}/${repository}/contents/${path}`;

  useEffect(() => {
    const pull = async () => {
      setFetching(true);

      if (branch) {
        target += `?ref=${branch}`;
      }

      const response = await fetch(target, { headers: { ...authHeader(token), Accept: 'application/vnd.github.v3+json' } });

      setFetching(false);

      if (response.status !== 200) {
        return;
      }

      const json = await response.json();

      // thx https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
      const decodedContent = decodeURIComponent(
        atob(json.content)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join(''),
      );

      const readyContent = afterPull(JSON.parse(decodedContent));

      setContent(readyContent);
      setSha(json.sha);
      setUpToDate(true);
    };

    if (owner && repository && path) {
      pull();
    }
  }, [owner, repository, path, target, token, afterPull, branch]);

  useEffect(() => {
    setUpToDate(false);
  }, [content]);

  const push = async () => {
    if (owner && repository && path && !isUpToDate) {
      const readyContent = JSON.stringify(beforePush(content));

      // thx https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
      const encodedContent = btoa(encodeURIComponent(readyContent).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(`0x${p1}`)));

      setFetching(true);

      fetch(target, {
        method: 'put',
        headers: {
          ...authHeader(token),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `updated ${path}`,
          content: encodedContent,
          sha,
          branch,
        }),
      }).then((response) => {
        if (response.status === 200) {
          setUpToDate(true);
        }

        setFetching(false);
      });
    }
  };

  const git = {
    isFetching,
    isUpToDate,
    push,
  };

  return [content, setContent, git];
};

export default useGitHubContent;
