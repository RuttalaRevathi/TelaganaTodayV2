/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getWorldAction from '../../redux/actions/getWorldAction';


const WorldScreen = ({
    navigation,
    worldData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorldAction('world'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {worldData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="world"
        />
    );
};

type Props = {
    worldData: Function,
};
const mapStateToProps = state => ({
    worldData: state.worldReducer?.worldData,
});
const mapDispatchToProps = {
    getWorldAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(WorldScreen);
