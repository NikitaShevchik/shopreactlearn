import { connect } from "react-redux";
import { Dispatch } from "redux";
import { MainReducerState } from "../../interfaces";
import ProductList from "./ProductList";

const mapStateToProps = (state: MainReducerState): Partial<MainReducerState> => ({ ...state })
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
