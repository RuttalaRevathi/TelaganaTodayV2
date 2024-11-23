/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getRewindAction from '../../redux/actions/getRewindAction';


const RewindScreen = ({
    navigation,
    rewindData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRewindAction('rewind'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {rewindData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="rewind"
        />
    );
};

type Props = {
    rewindData: Function,
};
const mapStateToProps = state => ({
    rewindData: state.rewindReducer?.rewindData,
});
const mapDispatchToProps = {
    getRewindAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(RewindScreen);
