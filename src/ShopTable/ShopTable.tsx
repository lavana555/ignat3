import React, {CSSProperties, ReactNode} from 'react';
import Stars from "../buyModalsAndSettingsCopy/Stars";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";

export interface ITableModel {
    title: (index: number) => ReactNode;
    render: (dataItem: any, modelIndex: number, dataIndex: number) => ReactNode;
}

interface ITableProps {
    // loading: boolean;
    // error: string;
    //
    // logoutCallback: () => void;

    model: ITableModel[];
    data: any;
    headerStyle?: CSSProperties,
    tableStyle?: CSSProperties,
    rowsStyle?: CSSProperties,
    rowStyle?: CSSProperties,
}

const ShopTable: React.FC<ITableProps> = (

    {
        // loading,
        // error,
        //
        // logoutCallback,
        model,
        data,
        headerStyle,
        tableStyle,
        rowsStyle,
        rowStyle,
    }
) => {
 let colorbg=useSelector((state:AppStateType) => state.color.colorbg);
    return (

        <div
            style={{
                margin: '0 10px',
                // minHeight: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                ...tableStyle,
            }}
        >
            table

            {/*{loading*/}
            {/*? <div style={{color: 'orange'}}>loading...</div>*/}
            {/*: error*/}
            {/*? <div style={{color: 'red'}}>{error}</div>*/}
            {/*: <div><br/></div>*/}
            {/*}*/}

            <div
                style={{
                    border: '1px solid red',
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:colorbg,
                    ...headerStyle,
                }}
            >
                {model.map((m: any, index: number) => m.title(index))}
            </div>

            <div
                style={{
                    border: '1px solid lime',
                    width: '100%',
                    background:'#5ede3e',
                    ...rowsStyle,
                }}
            >
                {data.map((dataItem: any, dataIndex: number) => (
                    <div
                        // onClick={()=>alert(dataItem.productName)}
                        key={dataItem.id || dataIndex}
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background:'#de3ed9',
                            ...rowStyle,
                        }}
                    >
                        {model.map((m, modelIndex) => m.render(dataItem, modelIndex, dataIndex))}
<Stars count={dataItem.rating} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopTable;



// const name = useSelector(state => state.logIn.name);
