import AlertTriangle from './icons/alert-triangle.svg';
import ArrowLeft from './icons/arrow-left.svg';
import CodeAsterix from './icons/code-asterix.svg';
import Code from './icons/code.svg';
import Download from './icons/download.svg';
import EyeOff from './icons/eye-off.svg';
import Eye from './icons/eye.svg';
import Key from './icons/key.svg';
import Logout from './icons/logout.svg';
import Message from './icons/message.svg';
import Passkey from './icons/passkey.svg';
import Password from './icons/password.svg';
import Personal from './icons/personal.svg';
import Phone from './icons/phone.svg';
import Qrcode from './icons/qrcode.svg';
import Refresh from './icons/refresh.svg';
import Settings from './icons/settings.svg';
import Totp from './icons/totp.svg';
import Trash from './icons/trash.svg';
import Unlink from './icons/unlink.svg';
import User from './icons/user.svg';
import Webauthn from './icons/webauthn.svg';

type Icon = {
  src: string;
  width: number;
  height: number;
  blurWidth: number;
  blurHeight: number;
};

export const icons = {
  'alert-triangle': AlertTriangle as Icon,
  'arrow-left': ArrowLeft as Icon,
  'code-asterix': CodeAsterix as Icon,
  code: Code as Icon,
  download: Download as Icon,
  'eye-off': EyeOff as Icon,
  eye: Eye as Icon,
  key: Key as Icon,
  logout: Logout as Icon,
  message: Message as Icon,
  passkey: Passkey as Icon,
  password: Password as Icon,
  personal: Personal as Icon,
  phone: Phone as Icon,
  qrcode: Qrcode as Icon,
  refresh: Refresh as Icon,
  settings: Settings as Icon,
  totp: Totp as Icon,
  trash: Trash as Icon,
  unlink: Unlink as Icon,
  user: User as Icon,
  webauthn: Webauthn as Icon,
};
export type IconName = keyof typeof icons;
