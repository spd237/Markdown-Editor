import Markdown from './Markdown';
import Preview from './Preview';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { AuthContext } from '../App';
import { getDocument, updateDocumentContent } from '../api/docApi';

export default function Content() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [markdownOpen, setMarkdownOpen] = useState(true);
  const [markdownContent, setMarkdownContent] = useState('');

  const queryClient = useQueryClient();

  const markdownContentMutation = useMutation({
    mutationFn: ({
      id,
      content,
      token,
    }: {
      id: string | undefined;
      content: string;
      token: string | null;
    }) => updateDocumentContent(id, content, token),
    onSuccess: (data) => {
      queryClient.setQueryData(['documents', id], data);
    },
  });

  // markdownContentMutation.mutate({
  //   id: id,
  //   content: markdownContent,
  //   token: token,
  // });

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
      <Markdown
        markdownOpen={markdownOpen}
        setMarkdownOpen={setMarkdownOpen}
        markdownContent={markdownContent}
        setMarkdownContent={setMarkdownContent}
      />
      <Preview
        markdownOpen={markdownOpen}
        setMarkdownOpen={setMarkdownOpen}
        markdownContent={markdownContent}
      />
    </>
  );
}
