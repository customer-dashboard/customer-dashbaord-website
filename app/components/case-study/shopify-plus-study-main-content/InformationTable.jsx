import React from 'react'

function InformationTable(props) {
  const { dataValue } = props;
  return (
    <>
    
        <div className="information-table">
            <div className="table-content">
                <div className="row">
                        <div className="data__ table-content-item col-lg-3 col-md-6">
                            <h3 className="column-type">Date</h3>
                            <h4 className="column-content">{dataValue.Joined}</h4>
                        </div>
                        <div className="plan__ table-content-item col-lg-3 col-md-6">
                            <h3 className="column-type">Shopify Plan</h3>
                            <h4 className="column-content">{dataValue.Plan}</h4>
                            </div>
                        <div className="industry__  table-content-item col-lg-3 col-md-6">
                            <h3 className="column-type">Industry</h3>
                            <h4 className="column-content">{dataValue.Industry}</h4>
                        </div>
                        <div className="website__ table-content-item col-lg-3 col-md-6">
                            <h3 className="column-type">Website</h3>
                            <h4 className="column-content">
                                <a href={dataValue.Website} target="_blank" rel="noopener noreferrer">{dataValue.Website}</a>
                            </h4>
                        </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default InformationTable