import { useMediaQuery } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function useChangeMenuIcon() {
  const Icon = () =>
    useMediaQuery("(max-width: 768px)") ? <MoreVertIcon /> : <MoreHorizIcon />;
  return Icon;
}
