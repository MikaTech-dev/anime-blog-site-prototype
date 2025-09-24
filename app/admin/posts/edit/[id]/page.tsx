import { EditPostForm } from "@/components/edit-post-form"

interface EditPostPageProps {
  params: {
    id: string
  }
}

export default function EditPostPage({ params }: EditPostPageProps) {
  return <EditPostForm postId={params.id} />
}
