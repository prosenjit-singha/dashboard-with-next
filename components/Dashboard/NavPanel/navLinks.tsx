// importing icons
import {
  MdDashboard as DashboardIcon,
  MdOutlineAnalytics as AnalyticsIcon,
  MdOutlineEmail as MsgIcon,
} from "react-icons/md";
import { AiOutlineTransaction as TransactionIcon } from "react-icons/ai";
import { BsWallet2 as WalletIcon } from "react-icons/bs";
import { BiUser as UserIcon } from "react-icons/bi";
import { FiSettings as SettingIcon } from "react-icons/fi";
import { IconType } from "react-icons";

type Link = {
  icon: IconType;
  text: string;
  to: string; //url path
};

const navLinks: Link[] = [
  {
    icon: DashboardIcon,
    text: "Dashboard",
    to: "/",
  },
  {
    icon: TransactionIcon,
    text: "Transaction",
    to: "transaction",
  },
  {
    icon: WalletIcon,
    text: "My Wallet",
    to: "wallet",
  },
  {
    icon: AnalyticsIcon,
    text: "Analytics",
    to: "analytics",
  },
  {
    icon: UserIcon,
    text: "Personal",
    to: "user",
  },
  {
    icon: MsgIcon,
    text: "Message",
    to: "message",
  },
  {
    icon: SettingIcon,
    text: "Setting",
    to: "setting",
  },
];

export default navLinks;
