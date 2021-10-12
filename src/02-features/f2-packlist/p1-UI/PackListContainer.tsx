import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../01-main/bll/store";
import {UserType} from "../../f1-auth/a3-DAL/authApi";
import {CardPack} from "../p3-DAL/packListApi";
import {HeaderOptionType, Table} from "../../../03-common/components/Table/Table";
import {PreLoader} from "../../../03-common/components/PreLoader/PreLoader";
import s from "./PacksList.module.css";
import {MySelect} from "../../../03-common/components/Select/MySelect";
import {Pagination} from "../../../03-common/components/Pagination/Pagination";
import {TableBodyForCardPacks} from "./TableBodyForCardPacks";
import {getPacksCards, setPage, setPageCount} from "../p2-BLL/packList-reducer";

type PackListContainerTypeProps = {
    searchName: string
}

export const PackListContainer: React.FC<PackListContainerTypeProps> = ({searchName}) => {
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
        {headerTitle: 'Название',},
        {headerTitle: "Кол-во карт"},
        {
            headerTitle: "Последнее обновление",
            link: '⬇⬆',
            onClick: clickHandlerForSortUpdate
        },
        {headerTitle: "Создатель"},
        {headerTitle: "Действия"}];

    //Count cardsPacks into one page
    const optionsForSelector = [5, 10, 15];

    useEffect(() => {
        dispatch(getPacksCards(searchName, sortPack));
    }, [page, pageCount, searchName, dispatch, myPacks, sortPack]);

    //Change pageCount (selector options)
    const clickHandlerPageCount = (count: string) => {
        dispatch(setPageCount(+count));
    };

    const clickHandlerChangePage = (page: number) => {
        dispatch(setPage(page));
    };


    return (
        <>
            <div className={s.packsListHeaderWrapper}>
                {isFetching && <PreLoader/>}
            </div>
            <Table tableHeaders={tableHeaders} tableBody={<TableBodyForCardPacks myId={myId} cardPacks={cardPacks}/>}/>

            <div className={s.packsListFooterWrapper}>
                <Pagination totalCount={cardPacksTotalCount} count={pageCount} page={page}
                            onChangePage={clickHandlerChangePage}/>
                <div className={s.packListPageSelector}>
                    Показывать
                    <MySelect options={optionsForSelector} onChangeCountCards={clickHandlerPageCount}/>
                    колод на странице
                </div>

            </div>
        </>
    );
};