/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getBusinessAction from '../../redux/actions/getBusinessAction';
import CategoryUI from '../../components/CategoryUI';


const BusinessScreen = ({
    navigation,
    businessData,
    businessLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusinessAction('business'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {businessData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="business"
        />
    );
};

type Props = {
    businessData: Function,
    businessLoading: Boolean,
};
const mapStateToProps = state => ({
    businessData: state.businessReducer?.businessData,
    businessLoading: state.businessReducer?.businessLoading,
});
const mapDispatchToProps = {
    getBusinessAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(BusinessScreen);
