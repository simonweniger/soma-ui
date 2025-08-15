import { Checkbox, SomaCheckboxGroup } from "@/registry/default/ui/checkbox"

export default function CheckboxReusable() {
  return (
    <SomaCheckboxGroup
      description="Select a favorite sport"
      label="Favorite sports"
      isRequired
    >
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </SomaCheckboxGroup>
  )
}
