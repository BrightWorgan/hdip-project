import util from "../util";

const ShowDirector = (props: any) => {
  return util.isDirector() ? props.children : null;
};

export default ShowDirector;
