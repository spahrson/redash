import getOptions from "./getOptions";
import Renderer from "./Renderer";
import Editor from "./Editor";

export default {
  type: "GEOJSON",
  name: "Map (geoJSON)",
  getOptions,
  Renderer,
  Editor,

  defaultColumns: 3,
  defaultRows: 8,
  minColumns: 2,
};
