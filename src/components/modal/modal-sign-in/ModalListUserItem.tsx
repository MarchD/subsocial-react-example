import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import styles from './ModalSignIn.module.sass';
import AvatarElement from '../../common/avatar/AvatarElement';
import { AvatarSizes } from 'src/models/common/avatar';
import Title from '../../common/title/Title';
import { TitleSizes } from 'src/models/common/typography';
import Balance from '../../common/balance/Balance';
import Address from '../../common/address/Address';
import { useSelectProfile } from 'src/rtk/features/profiles/profilesHooks';
import { ModalListUserItemProps } from 'src/models/modal';
import { FC } from 'react';

const ModalListUserItem: FC<ModalListUserItemProps> = ({
  address,
  name,
  onClick,
}) => {
  const profile = useSelectProfile(address);

  return (
    <ListItem component={'button'} onClick={() => onClick(address)}>
      <ListItemAvatar className={styles.avatar}>
        <AvatarElement
          src={profile?.content?.avatar || ''}
          size={AvatarSizes.LARGE}
          id={address}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Title type={TitleSizes.PROFILE}>
            {profile?.content?.name || name}
          </Title>
        }
        secondary={
          <Balance
            address={address}
            isIcon={false}
            className={styles.balance}
          />
        }
      />
      <Address
        size={'sm'}
        label={address}
        isCopy={false}
        className={styles.address}
      />
    </ListItem>
  );
};

export default ModalListUserItem;
