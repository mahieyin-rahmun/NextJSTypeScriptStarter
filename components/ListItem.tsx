import React from "react";
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type TListItemProps = {
  icon: IconProp;
  listItemText: string;
};

function ListItem(props: TListItemProps) {
  const { icon, listItemText } = props;

  return (
    <MuiListItem>
      <ListItemIcon>
        <FontAwesomeIcon icon={icon} size="2x" />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6" gutterBottom>
          {listItemText}
        </Typography>
      </ListItemText>
    </MuiListItem>
  );
}

export default ListItem;
