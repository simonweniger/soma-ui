import { SomaTextField } from "@/registry/default/ui/textfield"

export default function TextfieldReusable() {
  return (
    <div className="flex flex-col gap-4">
      <SomaTextField label="Name" description="Enter your name" isRequired />
      <SomaTextField
        textArea
        label="Review"
        description="Leave a review"
        isRequired
      />
    </div>
  )
}
