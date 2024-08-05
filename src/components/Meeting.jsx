import { DyteMeeting } from '@dytesdk/react-ui-kit';
import { useDyteMeeting } from '@dytesdk/react-web-core';

function Meeting() {
  const { meeting } = useDyteMeeting();

  return (
    <div style={{ height: '500px' }}>
      <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={false} />
    </div>
  );
}

export default Meeting