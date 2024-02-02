import React from 'react';
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';

export const Novu = () => {
    
  return (
    <NovuProvider subscriberId={'65bc8c6accbad2d17d24e220'} applicationIdentifier={'K3GWG2804lmn'}>
      <PopoverNotificationCenter colorScheme={'light'}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};   