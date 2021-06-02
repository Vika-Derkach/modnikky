import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import React from "react";
import "./tree-view-categories.css";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});
export default function TreeViewCategories({ onFilterSize }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };
  const buttonsFilterSize = [
    { name: "S", nodeId: "2", labelSize: "S" },
    { name: "M", nodeId: "3", labelSize: "M" },
    { name: "L", nodeId: "4", labelSize: "L" },
    { name: "XL", nodeId: "5", labelSize: "XL" },
  ];
  const buttonsSize = buttonsFilterSize.map(({ name, labelSize, nodeId }) => {
    return (
      <TreeItem
        key={name}
        nodeId={nodeId}
        label={labelSize}
        onClick={() => onFilterSize(name)}
      />
    );
  });
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
      <TreeItem nodeId="1" label="SIZE">
        {buttonsSize}
      </TreeItem>
      <TreeItem nodeId="6" label="PRICE">
        <TreeItem nodeId="7" label="10-30$" />
        <TreeItem nodeId="8" label="30-100$" />
        <TreeItem nodeId="9" label="100-300$" />
      </TreeItem>

      <TreeItem nodeId="10" label="COLOR">
        <TreeItem nodeId="11" label="DARK" />
        <TreeItem nodeId="12" label="LIGHT" />
      </TreeItem>

      <TreeItem nodeId="13" label="FABRIC">
        <TreeItem nodeId="14" label="Denim" />
        <TreeItem nodeId="15" label="Leather" />
        <TreeItem nodeId="16" label="Cotton" />
        <TreeItem nodeId="17" label="Linen" />
      </TreeItem>
    </TreeView>
  );
}
