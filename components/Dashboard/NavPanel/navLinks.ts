// importing icons
import { IconType } from "react-icons";
import {
  MdDashboard as DashboardIcon,
  MdOutlineAnalytics as AnalyticsIcon,
  MdOutlineEmail as MsgIcon,
} from "react-icons/md";
import { AiOutlineTransaction as TransactionIcon } from "react-icons/ai";
import { BsWallet2 as WalletIcon } from "react-icons/bs";
import { BiUser as UserIcon } from "react-icons/bi";
import { FiSettings as SettingIcon } from "react-icons/fi";

type Link = {
  icon: IconType;
  text: string;
};

const navLinks: Link[] = [
  {
    icon: DashboardIcon,
    text: "Dashboard",
  },
  {
    icon: TransactionIcon,
    text: "Transaction",
  },
  {
    icon: WalletIcon,
    text: "My Wallet",
  },
  {
    icon: AnalyticsIcon,
    text: "Analytics",
  },
  {
    icon: UserIcon,
    text: "Personal",
  },
  {
    icon: MsgIcon,
    text: "Message",
  },
  {
    icon: SettingIcon,
    text: "Setting",
  },
];

export default navLinks;
