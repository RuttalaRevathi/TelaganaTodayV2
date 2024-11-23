/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getNriAction from '../../redux/actions/getNriAction';
import CategoryUI from '../../components/CategoryUI';


const NriScreen = ({
    navigation,
    nriData,
    nriLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNriAction('nri'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {nriData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="nri"
        />
    );
};

type Props = {
    nriData: Function,
    nriLoading: Boolean,
};
const mapStateToProps = state => ({
    nriData: state.nriReducer?.nriData,
    nriLoading: state.nriReducer?.nriLoading,
});
const mapDispatchToProps = {
    getNriAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NriScreen);
