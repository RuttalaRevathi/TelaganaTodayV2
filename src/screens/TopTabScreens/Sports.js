/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getSportsAction from '../../redux/actions/getSportsAction';
import CategoryUI from '../../components/CategoryUI';


const SportsScreen = ({
    navigation,
    sportsData,
    sportsLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSportsAction('sport'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {sportsData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="sport"
        />
    );
};

type Props = {
    sportsData: Function,
    sportsLoading: Boolean,
};
const mapStateToProps = state => ({
    sportsData: state.sportsReducer?.sportsData,
    sportsLoading: state.sportsReducer?.sportsLoading,
});
const mapDispatchToProps = {
    getSportsAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(SportsScreen);
