import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import React from "react";
import "./product-descr.css";
const useStyles = makeStyles({
  root: {
    height: 416,
    flexGrow: 1,
    maxWidth: 400,
    fontSize: 54,
    fontWeight: 900,
    lineHeight: 24,
    color: "black",
  },
});

export default function ProductDescr() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<RemoveIcon />}
      defaultExpandIcon={<AddIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <TreeItem nodeId="1" label="PRODUCT DESCRIPTION">
        <TreeItem
          nodeId="2"
          label="Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. "
        />
      </TreeItem>
      <TreeItem nodeId="3" label="SHIPPING & RETURNS">
        <TreeItem
          nodeId="4"
          label="FREE standard shipping on ALL orders – no minimums or exclusions!
          Return shipping from anywhere in the United States is always FREE.  "
        />
      </TreeItem>

      <TreeItem nodeId="5" label="FABRIC COMPOSITION">
        <TreeItem nodeId="6" label="Cotton" />
      </TreeItem>
    </TreeView>
  );
}
