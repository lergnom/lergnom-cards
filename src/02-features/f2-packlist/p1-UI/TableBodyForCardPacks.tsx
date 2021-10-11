import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../../01-main/bll/store";
import {CardPack} from "../p3-DAL/packListApi";

type TableBodyTypeProps = {
    cardPacks: Array<CardPack>
    myId: string
}

export const TableBodyForCardPacks = ({cardPacks, myId}: TableBodyTypeProps) => {
    const isFetching = useSelector<AppStoreType, boolean>(state => state.packList.isFetch);

    const onClickHandlerLearnTest = (id: string) => {
        return <Redirect to={`/learn/${id}`}/>;
    };


    return (
        <>
            {
                cardPacks.map(table => {

                    const jsDate = new Date(Date.parse(table.updated));
                    const lastUpdate = `${jsDate.getDate() > 9 ? jsDate.getDate() : `0${jsDate.getDate()}`}-${jsDate.getMonth() + 1 > 9 ? jsDate.getMonth() + 1 : `0${jsDate.getMonth() + 1}`}-${jsDate.getFullYear()}  ${jsDate.getHours() > 9 ? jsDate.getHours() : `0${jsDate.getHours()}`}:${jsDate.getMinutes() > 9 ? jsDate.getMinutes() : `0${jsDate.getMinutes()}`}`;

                    return (
                        <tr key={table._id}>
                            {/*   <th style={{color: "gray", cursor: "default"}}>
                                {(table.cardsCount > 0) || (myId === table.user_id) ?
                                    <Navlink to={`/cards/${table._id}`} body={table.name}/> : table.name}
                            </th>*/}
                            <td>{table.cardsCount}</td>
                            <td>{lastUpdate}</td>
                            <td>
                                {table.user_name}
                            </td>
               {/*             <td>
                                {myId === table.user_id &&
                                <DeleteCardPackModalContainer deleteId={table._id} namePack={table.name}
                                                              isButtonDisabled={isFetching}/>}
                                {myId === table.user_id &&
                                <EditCardPackModalContainer oldName={table.name} packId={table._id}
                                                            isButtonDisabled={isFetching}/>}
                                <Link to={`/learn/${table._id}&${table.name}`}> <Button title={"Ready study? OK :)"}
                                                                                        green
                                                                                        disabled={table.cardsCount < 1 ? true : isFetching}
                                                                                        onClick={() => {
                                                                                            onClickHandlerLearnTest(table._id);
                                                                                        }}>learn</Button> </Link>
                            </td>*/}
                        </tr>
                    );
                })}
        </>
    );
};

