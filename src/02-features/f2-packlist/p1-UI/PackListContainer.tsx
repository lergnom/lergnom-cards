import React, {useEffect, useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../01-main/bll/store";
import { UserType } from "../../f1-auth/a3-DAL/authApi";
import { CardPack } from "../p3-DAL/packListApi";
import {HeaderOptionType} from "../../../03-common/components/Table/Table";
import useDebounce from "../../../03-common/helpers/Debounce";
import {PreLoader} from "../../../03-common/components/PreLoader/PreLoader";
import { Redirect } from "react-router-dom";
import {PATH} from "../../../01-main/ui/routes/Routes";
import s from "./PacksList.module.css"
import { ToggleCheckBox } from "../../../03-common/components/CheckBoxToggle/ToggleCheckBox";
import {MySelect} from "../../../03-common/components/Select/MySelect";
import {Pagination} from "../../../03-common/components/Pagination/Pagination";

export const PackListContainer: React.FC = () => {
    const [searchPackName, setSearchPackName] = useState<string>('');
    const [sortPack, setSortPack] = useState<string>("");

    //for show my Packs
    const myPacks = useSelector<AppStoreType, boolean>(state => state.packList.myPacks);
    //for Table Body
    const cardPacks = useSelector<AppStoreType, Array<CardPack>>(state => state.packList.cardPacks);
    //for pagination
    const cardPacksTotalCount = useSelector<AppStoreType, number>(state => state.packList.cardPacksTotalCount);
    const pageCount = useSelector<AppStoreType, number>(state => state.packList.pageCount);
    const page = useSelector<AppStoreType, number>(state => state.packList.page);
    //for Preloader
    const isFetching = useSelector<AppStoreType, boolean>(state => state.packList.isFetch);
    //for Render
    const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.initialized);
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);

    const dispatch = useDispatch();

    let myId = '';
    if (user) {
        myId = user._id;
    }

    const clickHandlerForSortUpdate = () => {
        sortPack === "update" ? setSortPack('') :
            setSortPack("update");
    };

    // Data for Header Table
    const tableHeaders: Array<HeaderOptionType> = [
        {headerTitle: 'Name',},
        {headerTitle: "Cards"},
        {
            headerTitle: "Last Updated",
            link: '⬇⬆',
            onClick: clickHandlerForSortUpdate
        },
        {headerTitle: "Created by"},
        {headerTitle: "Actions"}];

    //Count cardsPacks into one page
    const optionsForSelector = [5, 10, 15];


    // useDebounce hook for delay searchPackName
    const debouncedSearchPackName = useDebounce(searchPackName, 1000);
    useEffect(() => {
        if (debouncedSearchPackName) {
            setSearchPackName(debouncedSearchPackName);
        }
    }, [debouncedSearchPackName]);
    // Example with Lodash // const searchPaymentByLastName = useCallback(debounce((value: string) => { dispatch(getInitialPayments({lastName: value})) }, 500),[])


    useEffect(() => {
        // dispatch(getPacksCards(debouncedSearchPackName, sortPack));
    }, [page, pageCount, debouncedSearchPackName, dispatch, myPacks, sortPack]);

    //Change pageCount (selector options)
    const clickHandlerPageCount = (count: string) => {
        // dispatch(setPageCount(+count));
    };

    const clickHandlerChangePage = (page: number) => {
        // dispatch(setPage(page));
    };


    const changeCheckedMyPacks = (e: React.ChangeEvent<HTMLInputElement>) => {
        // dispatch(getMyPacksCards(e.currentTarget.checked));
    };

    const getRangeMin = (min: number) => {
        // dispatch(getMinCountPackCard(min));

    };
    const getRangeMax = (max: number) => {
        // dispatch(getMaxCountPackCard(max));
    };

    if (!isInitialized) {
        return <PreLoader/>;
    }
    if (!user) {
        return <Redirect to={PATH.LOGIN_PAGE}/>;
    }

    return (
        <>
            <h1>Packs list</h1>
            <div className={s.packsListHeaderWrapper}>
                {isFetching && <PreLoader/>}
                <div>
                    <div>
                        <span style={{marginRight: "5px"}}>My Packs</span>
                        <ToggleCheckBox title={"Show me my packs... quickly :)"} onChange={changeCheckedMyPacks} checked={myPacks}/>
                    </div>
                    {/*<div style={{marginTop: "5px"}}>Number of cards <CustomRange getMin={getRangeMin}
                                                                                 getMax={getRangeMax}/></div>*/}
                </div>
                <div>
                 {/*   <Input value={searchPackName} onChangeText={setSearchPackName}
                               label={"Search by Pack Name   🔍"}/>*/}
                </div>
                {/*<div><AddCardPackModalContainer buttonTitle={"Add Pack"} title={"Open modal window for add new PackCard"}/></div>*/}
            </div>
            <div className={s.packListTableWrapper}>
          {/*      <Table tableHeaders={tableHeaders}
                       tableBody={<TableBodyForCardPacks myId={myId} cardPacks={cardPacks}/>}/>*/}
            </div>

            <div className={s.packsListFooterWrapper}>
                <Pagination totalCount={cardPacksTotalCount} count={pageCount} page={page}
                            onChangePage={clickHandlerChangePage}/>
                <div className={s.packListPageSelector}>
                    Show
                    <MySelect options={optionsForSelector} onChangeCountCards={clickHandlerPageCount}/>
                    Cards per Page
                </div>Select
            </div>
        </>
    );
};