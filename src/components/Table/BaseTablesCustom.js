import React, { Fragment } from "react";
import Pagination from "@material-ui/lab/Pagination";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";

function BaseTablesCustom({
  data,
  columns,
  options,
  loading,
  className,
  classes,
  keyField,
  textDataNull,
}) {
  const onTableChange = (type, { page, sizePerPage }) => {
    //console.log(page);
    //console.log(sizePerPage);
  };  

  return (
    <Fragment>
      <PaginationProvider pagination={paginationFactory(options)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <>
              <BootstrapTable
                wrapperClasses={`table-responsive ${className}`}
                rowClasses="text-nowrap"
                classes={classes}
                headerClasses="font-weight-boldest"
                remote={true}
                bordered={false}
                data={data}
                columns={columns}
                onTableChange={onTableChange}
                noDataIndication={() =>
                  loading ? (
                    "Đang tải dữ liệu ..."
                  ) : (
                    "Không có dữ liệu.s"
                  )
                }
                {...paginationTableProps}
                keyField={keyField}
              />
              <div className="d-flex justify-content-between">
                <Pagination
                  className="my-3"
                  count={Math.ceil(
                    paginationProps.totalSize / paginationProps.sizePerPage
                  )}
                  page={paginationProps.page}
                  siblingCount={1}
                  boundaryCount={1}
                  variant="outlined"
                  shape="rounded"
                  onChange={(event, value) => {
                    paginationProps.onPageChange(value);
                  }}
                />
                <div className="d-flex align-items-center">
                  Hiển thị
                  <DropdownButton
                    as={ButtonGroup}
                    key="secondary"
                    id={`dropdown-variants-Secondary`}
                    variant=" font-weight-boldest"
                    title={paginationProps.sizePerPage}
                  >
                    {paginationProps.sizePerPageList.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        eventKey={index}
                        active={
                          paginationProps.sizePerPageList[index] ===
                          paginationProps.sizePerPage
                        }
                        onClick={() =>
                          paginationProps.onSizePerPageChange(
                            paginationProps.sizePerPageList[index]
                          )
                        }
                      >
                        {paginationProps.sizePerPageList[index]}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  trên trang
                </div>
              </div>
            </>
          );
        }}
      </PaginationProvider>
    </Fragment>
  );
}

export default BaseTablesCustom;
