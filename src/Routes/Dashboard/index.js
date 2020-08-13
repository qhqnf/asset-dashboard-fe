import { connect } from "react-redux";
import { setAsset } from "../../redux/userReducer";
import DashboardContainer from "./DashboardContainer";

const mapStateToProps = (state) => ({
  id: state.userReducer.id,
  token: state.userReducer.token,
  asset: state.userReducer.asset,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAsset: (asset) => dispatch(setAsset(asset)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
