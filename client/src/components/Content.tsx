/* eslint-disable react-hooks/exhaustive-deps */

import Markdown from './Markdown';
import Preview from './Preview';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext, MarkdownContext } from '../App';
import { getDocument } from '../api/docApi';

export default function Content() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [markdownOpen, setMarkdownOpen] = useState(true);
  const { setMarkdownContent } = useContext(MarkdownContext);

  const { data } = useQuery({
    queryKey: ['documents', id, token],
    queryFn: () => {
      if (id && token) {
        return getDocument(id, token);
      }
    },
    enabled: !!id,
  });

  useEffect(() => {
    setMarkdownContent(data?.content ?? '');
  }, [data]);

  return (
    <>
      <Markdown markdownOpen={markdownOpen} setMarkdownOpen={setMarkdownOpen} />
      <Preview markdownOpen={markdownOpen} setMarkdownOpen={setMarkdownOpen} />
    </>
  );
}
