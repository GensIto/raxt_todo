import { Checkbox, Box, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export type TaskProps = {
  name: string;
  isDone: boolean;
  toggleIsDone: any;
  index: any;
  destroyTask: any;
  id: any;
};

export const Task = (props: TaskProps) => {
  return (
    <Box mb='16px'>
      <Checkbox
        isChecked={props.isDone}
        colorScheme='blue'
        size='lg'
        onChange={() => {
          props.toggleIsDone(props.index);
          props.toggleIsDone(props.id, props.index);
        }}>
        <Text>{props.name}</Text>
      </Checkbox>
      <CloseIcon onClick={() => props.destroyTask(props.id)} />
    </Box>
  );
};
