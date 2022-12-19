import DropdownEffort from '../components/Dropdown/DropdownEffort';
import DropdownFrequency from '../components/Dropdown/DropdownFrequency';
import TextInputNotes from '../components/TextInput/TextInputNotes';
import TextInputTitle from '../components/TextInput/TextInputTitle';

export default function EditTask() {
  return (
    <>
      <TextInputTitle />
      <DropdownFrequency />
      <DropdownEffort />
      <TextInputNotes />
      
    </>
  );
}
