/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getScienceAction from '../../redux/actions/getScienceAction';


const ScienceScreen = ({
    navigation,
    scienceData,
    
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScienceAction('tech'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {scienceData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="tech"
        />
    );
};

type Props = {
    scienceData: Function,
};
const mapStateToProps = state => ({
    scienceData: state.scienceReducer?.scienceData,
});
const mapDispatchToProps = {
    getScienceAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScienceScreen);
