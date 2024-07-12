import { useSnackbar } from 'notistack';

const NotificationTester = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('This is a notification!', {
      variant: 'success',
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      Show notification
    </button>
  );
};

export default NotificationTester;
