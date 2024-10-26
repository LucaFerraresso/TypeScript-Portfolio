import { Hash } from "crypto";
import { Server } from "http";
import {
  Activity,
  Airplay,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Aperture,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  AtSign,
  Award,
  BarChart,
  Battery,
  BatteryCharging,
  Bell,
  BellOff,
  Bluetooth,
  Bold,
  Book,
  BookOpen,
  Bookmark,
  Box,
  Briefcase,
  Calendar,
  Camera,
  CameraOff,
  Cast,
  Check,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Columns,
  Command,
  Compass,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Crosshair,
  Database,
  Delete,
  Disc,
  Divide,
  DivideCircle,
  DivideSquare,
  DollarSign,
  Download,
  DownloadCloud,
  Dribbble,
  Droplet,
  Edit,
  Edit2,
  Edit3,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  FastForward,
  Feather,
  Figma,
  FileMinus,
  FilePlus,
  FileText,
  Film,
  Filter,
  Flag,
  Folder,
  FolderMinus,
  FolderPlus,
  Framer,
  Frown,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe,
  Grid,
  HardDrive,
  Headphones,
  Heart,
  HelpCircle,
  Hexagon,
  Home,
  Inbox,
  Info,
  Instagram,
  Italic,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link,
  Link2,
  Linkedin,
  List,
  Loader,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Maximize,
  Maximize2,
  Meh,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Monitor,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Octagon,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  PenTool,
  Percent,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCcw,
  RefreshCw,
  Repeat,
  Rewind,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Settings,
  Share,
  Share2,
  Shield,
  ShieldOff,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slack,
  Slash,
  Sliders,
  Smartphone,
  Smile,
  Speaker,
  Square,
  Star,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Tablet,
  Tag,
  Target,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Trash,
  Trash2,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  UploadCloud,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Video,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  Wifi,
  WifiOff,
  Wind,
  X,
  XCircle,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const listaIcone = [
  { label: "Activity", icon: <Activity /> },
  { label: "Airplay", icon: <Airplay /> },
  { label: "AlertCircle", icon: <AlertCircle /> },
  { label: "AlertOctagon", icon: <AlertOctagon /> },
  { label: "AlertTriangle", icon: <AlertTriangle /> },
  { label: "AlignCenter", icon: <AlignCenter /> },
  { label: "AlignJustify", icon: <AlignJustify /> },
  { label: "AlignLeft", icon: <AlignLeft /> },
  { label: "AlignRight", icon: <AlignRight /> },
  { label: "Anchor", icon: <Anchor /> },
  { label: "Aperture", icon: <Aperture /> },
  { label: "Archive", icon: <Archive /> },
  { label: "ArrowDown", icon: <ArrowDown /> },
  { label: "ArrowLeft", icon: <ArrowLeft /> },
  { label: "ArrowRight", icon: <ArrowRight /> },
  { label: "ArrowUp", icon: <ArrowUp /> },
  { label: "AtSign", icon: <AtSign /> },
  { label: "Award", icon: <Award /> },
  { label: "BarChart", icon: <BarChart /> },
  { label: "Battery", icon: <Battery /> },
  { label: "BatteryCharging", icon: <BatteryCharging /> },
  { label: "Bell", icon: <Bell /> },
  { label: "BellOff", icon: <BellOff /> },
  { label: "Bluetooth", icon: <Bluetooth /> },
  { label: "Bold", icon: <Bold /> },
  { label: "Book", icon: <Book /> },
  { label: "BookOpen", icon: <BookOpen /> },
  { label: "Bookmark", icon: <Bookmark /> },
  { label: "Box", icon: <Box /> },
  { label: "Briefcase", icon: <Briefcase /> },
  { label: "Calendar", icon: <Calendar /> },
  { label: "Camera", icon: <Camera /> },
  { label: "CameraOff", icon: <CameraOff /> },
  { label: "Cast", icon: <Cast /> },
  { label: "Check", icon: <Check /> },
  { label: "CheckCircle", icon: <CheckCircle /> },
  { label: "CheckSquare", icon: <CheckSquare /> },
  { label: "ChevronDown", icon: <ChevronDown /> },
  { label: "ChevronLeft", icon: <ChevronLeft /> },
  { label: "ChevronRight", icon: <ChevronRight /> },
  { label: "ChevronUp", icon: <ChevronUp /> },
  { label: "Clock", icon: <Clock /> },
  { label: "Cloud", icon: <Cloud /> },
  { label: "CloudDrizzle", icon: <CloudDrizzle /> },
  { label: "CloudLightning", icon: <CloudLightning /> },
  { label: "CloudOff", icon: <CloudOff /> },
  { label: "CloudRain", icon: <CloudRain /> },
  { label: "CloudSnow", icon: <CloudSnow /> },
  { label: "Code", icon: <Code /> },
  { label: "Codepen", icon: <Codepen /> },
  { label: "Codesandbox", icon: <Codesandbox /> },
  { label: "Coffee", icon: <Coffee /> },
  { label: "Columns", icon: <Columns /> },
  { label: "Command", icon: <Command /> },
  { label: "Compass", icon: <Compass /> },
  { label: "Copy", icon: <Copy /> },
  { label: "CornerDownLeft", icon: <CornerDownLeft /> },
  { label: "CornerDownRight", icon: <CornerDownRight /> },
  { label: "CornerLeftDown", icon: <CornerLeftDown /> },
  { label: "CornerLeftUp", icon: <CornerLeftUp /> },
  { label: "CornerRightDown", icon: <CornerRightDown /> },
  { label: "CornerRightUp", icon: <CornerRightUp /> },
  { label: "CornerUpLeft", icon: <CornerUpLeft /> },
  { label: "CornerUpRight", icon: <CornerUpRight /> },
  { label: "Cpu", icon: <Cpu /> },
  { label: "CreditCard", icon: <CreditCard /> },
  { label: "Crop", icon: <Crop /> },
  { label: "Crosshair", icon: <Crosshair /> },
  { label: "Database", icon: <Database /> },
  { label: "Delete", icon: <Delete /> },
  { label: "Disc", icon: <Disc /> },
  { label: "Divide", icon: <Divide /> },
  { label: "DivideCircle", icon: <DivideCircle /> },
  { label: "DivideSquare", icon: <DivideSquare /> },
  { label: "DollarSign", icon: <DollarSign /> },
  { label: "Download", icon: <Download /> },
  { label: "DownloadCloud", icon: <DownloadCloud /> },
  { label: "Dribbble", icon: <Dribbble /> },
  { label: "Droplet", icon: <Droplet /> },
  { label: "Edit", icon: <Edit /> },
  { label: "Edit2", icon: <Edit2 /> },
  { label: "Edit3", icon: <Edit3 /> },
  { label: "ExternalLink", icon: <ExternalLink /> },
  { label: "Eye", icon: <Eye /> },
  { label: "EyeOff", icon: <EyeOff /> },
  { label: "Facebook", icon: <Facebook /> },
  { label: "FastForward", icon: <FastForward /> },
  { label: "Feather", icon: <Feather /> },
  { label: "Figma", icon: <Figma /> },
  { label: "File", icon: <File /> },
  { label: "FileMinus", icon: <FileMinus /> },
  { label: "FilePlus", icon: <FilePlus /> },
  { label: "FileText", icon: <FileText /> },
  { label: "Film", icon: <Film /> },
  { label: "Filter", icon: <Filter /> },
  { label: "Flag", icon: <Flag /> },
  { label: "Folder", icon: <Folder /> },
  { label: "FolderMinus", icon: <FolderMinus /> },
  { label: "FolderPlus", icon: <FolderPlus /> },
  { label: "Framer", icon: <Framer /> },
  { label: "Frown", icon: <Frown /> },
  { label: "Gift", icon: <Gift /> },
  { label: "GitBranch", icon: <GitBranch /> },
  { label: "GitCommit", icon: <GitCommit /> },
  { label: "GitMerge", icon: <GitMerge /> },
  { label: "GitPullRequest", icon: <GitPullRequest /> },
  { label: "Github", icon: <Github /> },
  { label: "Gitlab", icon: <Gitlab /> },
  { label: "Globe", icon: <Globe /> },
  { label: "Grid", icon: <Grid /> },
  { label: "HardDrive", icon: <HardDrive /> },
  { label: "Hash", icon: <Hash /> },
  { label: "Headphones", icon: <Headphones /> },
  { label: "Heart", icon: <Heart /> },
  { label: "HelpCircle", icon: <HelpCircle /> },
  { label: "Hexagon", icon: <Hexagon /> },
  { label: "Home", icon: <Home /> },
  { label: "Inbox", icon: <Inbox /> },
  { label: "Info", icon: <Info /> },
  { label: "Instagram", icon: <Instagram /> },
  { label: "Italic", icon: <Italic /> },
  { label: "Key", icon: <Key /> },
  { label: "Layers", icon: <Layers /> },
  { label: "Layout", icon: <Layout /> },
  { label: "LifeBuoy", icon: <LifeBuoy /> },
  { label: "Link", icon: <Link /> },
  { label: "Link2", icon: <Link2 /> },
  { label: "Linkedin", icon: <Linkedin /> },
  { label: "List", icon: <List /> },
  { label: "Loader", icon: <Loader /> },
  { label: "LogIn", icon: <LogIn /> },
  { label: "LogOut", icon: <LogOut /> },
  { label: "Mail", icon: <Mail /> },
  { label: "Map", icon: <Map /> },
  { label: "MapPin", icon: <MapPin /> },
  { label: "Maximize", icon: <Maximize /> },
  { label: "Maximize2", icon: <Maximize2 /> },
  { label: "Meh", icon: <Meh /> },
  { label: "Menu", icon: <Menu /> },
  { label: "MessageCircle", icon: <MessageCircle /> },
  { label: "MessageSquare", icon: <MessageSquare /> },
  { label: "Mic", icon: <Mic /> },
  { label: "MicOff", icon: <MicOff /> },
  { label: "Minimize", icon: <Minimize /> },
  { label: "Minimize2", icon: <Minimize2 /> },
  { label: "Minus", icon: <Minus /> },
  { label: "MinusCircle", icon: <MinusCircle /> },
  { label: "MinusSquare", icon: <MinusSquare /> },
  { label: "Monitor", icon: <Monitor /> },
  { label: "Moon", icon: <Moon /> },
  { label: "MoreHorizontal", icon: <MoreHorizontal /> },
  { label: "MoreVertical", icon: <MoreVertical /> },
  { label: "MousePointer", icon: <MousePointer /> },
  { label: "Move", icon: <Move /> },
  { label: "Music", icon: <Music /> },
  { label: "Navigation", icon: <Navigation /> },
  { label: "Navigation2", icon: <Navigation2 /> },
  { label: "Octagon", icon: <Octagon /> },
  { label: "Package", icon: <Package /> },
  { label: "Paperclip", icon: <Paperclip /> },
  { label: "Pause", icon: <Pause /> },
  { label: "PauseCircle", icon: <PauseCircle /> },
  { label: "PenTool", icon: <PenTool /> },
  { label: "Percent", icon: <Percent /> },
  { label: "Phone", icon: <Phone /> },
  { label: "PhoneCall", icon: <PhoneCall /> },
  { label: "PhoneForwarded", icon: <PhoneForwarded /> },
  { label: "PhoneIncoming", icon: <PhoneIncoming /> },
  { label: "PhoneMissed", icon: <PhoneMissed /> },
  { label: "PhoneOff", icon: <PhoneOff /> },
  { label: "PhoneOutgoing", icon: <PhoneOutgoing /> },
  { label: "PieChart", icon: <PieChart /> },
  { label: "Play", icon: <Play /> },
  { label: "PlayCircle", icon: <PlayCircle /> },
  { label: "Plus", icon: <Plus /> },
  { label: "PlusCircle", icon: <PlusCircle /> },
  { label: "PlusSquare", icon: <PlusSquare /> },
  { label: "Pocket", icon: <Pocket /> },
  { label: "Power", icon: <Power /> },
  { label: "Printer", icon: <Printer /> },
  { label: "Radio", icon: <Radio /> },
  { label: "RefreshCcw", icon: <RefreshCcw /> },
  { label: "RefreshCw", icon: <RefreshCw /> },
  { label: "Repeat", icon: <Repeat /> },
  { label: "Rewind", icon: <Rewind /> },
  { label: "RotateCcw", icon: <RotateCcw /> },
  { label: "RotateCw", icon: <RotateCw /> },
  { label: "Rss", icon: <Rss /> },
  { label: "Save", icon: <Save /> },
  { label: "Scissors", icon: <Scissors /> },
  { label: "Search", icon: <Search /> },
  { label: "Send", icon: <Send /> },
  { label: "Server", icon: <Server /> },
  { label: "Settings", icon: <Settings /> },
  { label: "Share", icon: <Share /> },
  { label: "Share2", icon: <Share2 /> },
  { label: "Shield", icon: <Shield /> },
  { label: "ShieldOff", icon: <ShieldOff /> },
  { label: "ShoppingBag", icon: <ShoppingBag /> },
  { label: "ShoppingCart", icon: <ShoppingCart /> },
  { label: "Shuffle", icon: <Shuffle /> },
  { label: "Sidebar", icon: <Sidebar /> },
  { label: "SkipBack", icon: <SkipBack /> },
  { label: "SkipForward", icon: <SkipForward /> },
  { label: "Slack", icon: <Slack /> },
  { label: "Slash", icon: <Slash /> },
  { label: "Sliders", icon: <Sliders /> },
  { label: "Smartphone", icon: <Smartphone /> },
  { label: "Smile", icon: <Smile /> },
  { label: "Speaker", icon: <Speaker /> },
  { label: "Square", icon: <Square /> },
  { label: "Star", icon: <Star /> },
  { label: "StopCircle", icon: <StopCircle /> },
  { label: "Sun", icon: <Sun /> },
  { label: "Sunrise", icon: <Sunrise /> },
  { label: "Sunset", icon: <Sunset /> },
  { label: "Tablet", icon: <Tablet /> },
  { label: "Tag", icon: <Tag /> },
  { label: "Target", icon: <Target /> },
  { label: "Terminal", icon: <Terminal /> },
  { label: "Thermometer", icon: <Thermometer /> },
  { label: "ThumbsDown", icon: <ThumbsDown /> },
  { label: "ThumbsUp", icon: <ThumbsUp /> },
  { label: "ToggleLeft", icon: <ToggleLeft /> },
  { label: "ToggleRight", icon: <ToggleRight /> },
  { label: "Trash", icon: <Trash /> },
  { label: "Trash2", icon: <Trash2 /> },
  { label: "Trello", icon: <Trello /> },
  { label: "TrendingDown", icon: <TrendingDown /> },
  { label: "TrendingUp", icon: <TrendingUp /> },
  { label: "Triangle", icon: <Triangle /> },
  { label: "Truck", icon: <Truck /> },
  { label: "Tv", icon: <Tv /> },
  { label: "Twitch", icon: <Twitch /> },
  { label: "Twitter", icon: <Twitter /> },
  { label: "Type", icon: <Type /> },
  { label: "Umbrella", icon: <Umbrella /> },
  { label: "Underline", icon: <Underline /> },
  { label: "Unlock", icon: <Unlock /> },
  { label: "Upload", icon: <Upload /> },
  { label: "UploadCloud", icon: <UploadCloud /> },
  { label: "User", icon: <User /> },
  { label: "UserCheck", icon: <UserCheck /> },
  { label: "UserMinus", icon: <UserMinus /> },
  { label: "UserPlus", icon: <UserPlus /> },
  { label: "UserX", icon: <UserX /> },
  { label: "Users", icon: <Users /> },
  { label: "Video", icon: <Video /> },
  { label: "VideoOff", icon: <VideoOff /> },
  { label: "Voicemail", icon: <Voicemail /> },
  { label: "Volume", icon: <Volume /> },
  { label: "Volume1", icon: <Volume1 /> },
  { label: "Volume2", icon: <Volume2 /> },
  { label: "VolumeX", icon: <VolumeX /> },
  { label: "Watch", icon: <Watch /> },
  { label: "Wifi", icon: <Wifi /> },
  { label: "WifiOff", icon: <WifiOff /> },
  { label: "Wind", icon: <Wind /> },
  { label: "X", icon: <X /> },
  { label: "XCircle", icon: <XCircle /> },
  { label: "XSquare", icon: <XSquare /> },
  { label: "Youtube", icon: <Youtube /> },
  { label: "Zap", icon: <Zap /> },
  { label: "ZapOff", icon: <ZapOff /> },
  { label: "ZoomIn", icon: <ZoomIn /> },
  { label: "ZoomOut", icon: <ZoomOut /> },
];

export default listaIcone;
