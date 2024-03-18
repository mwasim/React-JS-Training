interface UerMessage {
  name: string;
  message: string;
}

const Message = (props: UerMessage): any => {
  return (
    <p>
      {props.name}, {props.message}
    </p>
  );
};

export default Message;
