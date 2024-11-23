/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getTelanganaAction from '../../redux/actions/getTelanganaAction';
import CategoryUI from '../../components/CategoryUI';


const TelanganaScreen = ({
    navigation,
    telanganaData,
    telanganaLoaing,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTelanganaAction('telangana'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {telanganaData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="telangana"
        />
    );
};

type Props = {
    telanganaData: Function,
    telanganaLoaing: Boolean,
};
const mapStateToProps = state => ({
    telanganaData: state.telanganaReducer?.telanganaData,
    telanganaLoaing: state.telanganaReducer?.telanganaLoaing,
});
const mapDispatchToProps = {
    getTelanganaAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(TelanganaScreen);
