import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import DataTable from '~/shared/components/data-table'
import Column from 'antd/lib/table/Column'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Modal, Form, Input, Select, DatePicker, Button, Divider } from 'antd'
import dataSource from '~/assets/mock/api-data.json'
import LabelContainer from '~/shared/components/label-contaoner'
import ColumnGroup from 'antd/lib/table/ColumnGroup'
import CustomizeModal from '~/shared/components/customize-modal'
const components = {
    PageContainer: styled(PageContainer)``
}

interface APIDemandRequestListState {
    selectedRowKeys: any[]
    successModalVisible: boolean
}

interface APIDemandRequestListProps {}

export default class APIDemandRequestList extends Component<
    RouteComponentProps<APIDemandRequestListProps>,
    APIDemandRequestListState
> {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [],
            successModalVisible: false
        }
    }

    public render() {
        return (
            <components.PageContainer title="API Demand Request List">
                {this.renderFormContainer()}
                {this.renderTableContainer()}
                {this.renderModal()}
            </components.PageContainer>
        )
    }
    public renderModal() {
        return (
            <CustomizeModal
                title="Success!"
                visible={this.state.successModalVisible}
                okText="Demand List -->"
                content="Check Status in Demand List."
                onOk={() => this.closeSuccessModal()}
                onCancel={() => this.closeSuccessModal()}
            ></CustomizeModal>
        )
    }

    public renderFormContainer() {
        const { RangePicker } = DatePicker
        return (
            <CardContainer title="Search">
                <DataForm
                    name="demo-form"
                    column={3}
                    labelCol={{ span: 10 }}
                    labelAlign="left"
                    actions={this.renderFormAction()}
                >
                    <DataForm.Item name="DemandName" label="Project Name">
                        <Input />
                    </DataForm.Item>
                    <DataForm.Item
                        name="Contry"
                        label="Country"
                        initialValue="Georgia"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Georgia">
                                Georgia
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DemandApproveStatus"
                        label="Demand Approval Status"
                        initialValue="Approve"
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DemandApproveDate"
                        label="Demand Approval Date"
                        collapse
                    >
                        <DatePicker renderExtraFooter={() => 'extra footer'} />
                    </DataForm.Item>
                    <DataForm.Item
                        name="BackendSystem"
                        label="Backend System"
                        initialValue="HUB"
                        collapse
                    >
                        <Select>
                            <Select.Option value="HUB">HUB</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DemandApproveDate"
                        label="Demand Approve Date"
                        collapse
                    >
                        <RangePicker renderExtraFooter={() => 'extra footer'} />
                    </DataForm.Item>
                    <DataForm.Item
                        name="OSSOverallContact"
                        label="CB API Contact"
                        initialValue="Cameron Williamson"
                    >
                        <Select>
                            <Select.Option value="Cameron Williamson">
                                Cameron Williamson
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DemandClassification"
                        label="Demand Classification"
                        initialValue="New"
                        collapse
                    >
                        <Select>
                            <Select.Option value="New">New</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="Channel"
                        label="Channel"
                        initialValue="CMB"
                        collapse
                    >
                        <Select>
                            <Select.Option value="CMB">CMB</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignReviewApproval"
                        label="Design Approval Status"
                        initialValue="CMB"
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignApproveDate"
                        label="Design Approve Date"
                        collapse
                    >
                        <RangePicker />
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignApproval"
                        label="Design Review Approval Status"
                        initialValue="Approve"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignReviewApprovalDate"
                        label="Design Review Approval Date"
                        collapse
                    >
                        <RangePicker />
                    </DataForm.Item>
                    <DataForm.Item name="SAPIName" label="API Name" collapse>
                        <Input />
                    </DataForm.Item>

                    <DataForm.Item
                        name="GBGF"
                        label="GB/GF"
                        initialValue="RBWM"
                        collapse
                    >
                        <Select>
                            <Select.Option value="RBWM">RBWM</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="RequestorContact"
                        label="Requester"
                        collapse
                    >
                        <Input />
                    </DataForm.Item>
                    <DataForm.Item
                        name="APIlifecycleStage"
                        label="API lifecycle Stage"
                        initialValue="Production"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Production">
                                Production
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="Platfrom"
                        label="Platfrom"
                        initialValue="DTP"
                        collapse
                    >
                        <Select>
                            <Select.Option value="DTP">DTP</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="TargetLiveDate"
                        label="Target Live Date"
                    >
                        <RangePicker />
                    </DataForm.Item>
                    <DataForm.Item name="SAPIRefNumber" label="API ID" collapse>
                        <Input />
                    </DataForm.Item>
                    <DataForm.Item
                        name="CoreBankingSystemContact"
                        label="Core Banking System Contact"
                        initialValue="Cameron Williamson"
                    >
                        <Select>
                            <Select.Option value="Cameron Williamson">
                                Cameron Williamson
                            </Select.Option>
                        </Select>
                    </DataForm.Item>

                    <DataForm.Item
                        name="OldSAPIRefNumber"
                        label="Original API ID"
                        collapse
                    >
                        <Input />
                    </DataForm.Item>
                    <DataForm.Item
                        name="APIType"
                        label="API Type"
                        initialValue="TRUE SAPI"
                        collapse
                    >
                        <Select>
                            <Select.Option value="TRUE SAPI">
                                TRUE SAPI
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                </DataForm>
            </CardContainer>
        )
    }

    public renderTableContainer() {
        const { selectedRowKeys } = this.state

        return (
            <CardContainer title="API Demand Request List">
                <DataTable
                    rowKey="UniqueOrderRef"
                    dataSource={dataSource}
                    rowSelection={{
                        selectedRowKeys
                    }}
                    actions={this.renderTableAction()}
                >
                    <ColumnGroup title="Demand Governance" className="red">
                        <Column
                            title="UniqueOrderRef"
                            dataIndex="UniqueOrderRef"
                            key="UniqueOrderRef"
                            ellipsis={true}
                            render={text => (
                                <Button
                                    type="link"
                                    onClick={() => this.openForm()}
                                >
                                    {text}
                                </Button>
                            )}
                        />
                        <Column
                            title="EntryCreationDate"
                            dataIndex="EntryCreationDate"
                            key="EntryCreationDate"
                            ellipsis={true}
                        />
                        <Column
                            title="OrderRecordDate"
                            dataIndex="OrderRecordDate"
                            key="OrderRecordDate"
                            ellipsis={true}
                        />
                        <Column
                            title="Project Name"
                            dataIndex="DemandName"
                            key="DemandName"
                            ellipsis={true}
                        />
                        <Column
                            title="API Name"
                            dataIndex="SAPIName"
                            key="SAPIName"
                            ellipsis={true}
                            sorter
                        />
                        <Column
                            title="Country"
                            dataIndex="Country"
                            key="Country"
                            ellipsis={true}
                            sorter
                        />
                        <Column
                            title="BackendSystem"
                            dataIndex="BackEndSystem"
                            key="BackEndSystem"
                            ellipsis={true}
                        />
                        <Column
                            title="Channel"
                            dataIndex="Channel"
                            key="Channel"
                            ellipsis={true}
                        />
                        <Column /*新加字段*/
                            title="Consumer"
                            dataIndex="Channel"
                            key="Channel"
                            ellipsis={true}
                        />
                        <Column
                            title="Requester"
                            dataIndex="RequestorContact"
                            key="RequestorContact"
                            ellipsis={true}
                        />
                        <Column
                            title="CB API Contact"
                            dataIndex="OSSOverallContact"
                            key="OSSOverallContact"
                            ellipsis={true}
                        />
                        <Column
                            title="Core Banking System Contact"
                            dataIndex="CoreBankingSystemContact"
                            key="CoreBankingSystemContact"
                            ellipsis={true}
                        />
                        <Column
                            title="GB/GF"
                            dataIndex="GBGF"
                            key="GBGF"
                            ellipsis={true}
                        />
                        <Column
                            title="Multi-Country"
                            dataIndex="MultiCountry"
                            key="MultiCountry"
                            ellipsis={true}
                        />
                        <Column
                            title="API lifecycle Stage"
                            dataIndex="APIlifecycleStage"
                            key="APIlifecycleStage"
                            ellipsis={true}
                        />
                        <Column
                            title="Target Live Date"
                            dataIndex="TargetLiveDate"
                            key="TargetLiveDate"
                            ellipsis={true}
                        />
                        <Column
                            title="Total API L0 Estimates"
                            dataIndex="TotalOSSL0Estimates"
                            key="TotalOSSL0Estimates"
                            ellipsis={true}
                        />
                        <Column
                            title="Mule API L0 Estimates"
                            dataIndex="OSSAPIL0Estimates"
                            key="OSSAPIL0Estimates"
                            ellipsis={true}
                        />
                        <Column
                            title="CB System L0 Estimates"
                            dataIndex="CBSystemL0Estimates"
                            key="CBSystemL0Estimates"
                            ellipsis={true}
                        />
                        <Column
                            title="BPID"
                            dataIndex="GPDMInterlockBPID"
                            key="GPDMInterlockBPID"
                            ellipsis={true}
                        />
                        <Column /*新加字段*/
                            title="Demand Approval Status"
                            dataIndex="DemandGovernance"
                            key="DemandGovernance"
                            ellipsis={true}
                        />
                        <Column
                            title="Demand Approval Date"
                            dataIndex="DemandGovernance"
                            key="DemandGovernance"
                            ellipsis={true}
                        />
                    </ColumnGroup>
                    <ColumnGroup title="Design Governance" className="green">
                        <Column
                            title="Functional Domain"
                            dataIndex="FunctionalDomain"
                            key="FunctionalDomain"
                            ellipsis={true}
                        />
                        <Column
                            title="Feature"
                            dataIndex="Feature"
                            key="Feature"
                            ellipsis={true}
                        />
                        <Column
                            title="Service"
                            dataIndex="Service"
                            key="Service"
                            ellipsis={true}
                        />
                        <Column
                            title="Platfrom"
                            dataIndex="Platfrom"
                            key="Platfrom"
                            ellipsis={true}
                        />
                        <Column
                            title="API Type"
                            dataIndex="APIType"
                            key="APIType"
                            ellipsis={true}
                        />
                        <Column
                            title="Channel Agnostic"
                            dataIndex="ChannelAgnostic"
                            key="ChannelAgnostic"
                            ellipsis={true}
                        />
                        <Column
                            title="Demand Classification"
                            dataIndex="DemandClassification"
                            key="DemandClassification"
                            ellipsis={true}
                        />
                        <Column
                            title="Reusability Score"
                            dataIndex="ReusabilityScore"
                            key="ReusabilityScore"
                            ellipsis={true}
                        />
                        <Column
                            title="API ID"
                            dataIndex="SAPIRefNumber"
                            key="SAPIRefNumber"
                            ellipsis={true}
                        />
                        <Column
                            title="Original API ID"
                            dataIndex="OldSAPIRefNumber"
                            key="OldSAPIRefNumber"
                            ellipsis={true}
                        />
                        <Column /* 新加字段 */
                            title="Design Review Approval Status"
                            dataIndex="FinalApproval"
                            key="FinalApproval"
                            ellipsis={true}
                        />
                        <Column
                            title="Design Review Approval Date"
                            dataIndex="DesignReviewApproval"
                            key="DesignReviewApproval"
                            ellipsis={true}
                        />
                        <Column /* 新加字段 */
                            title="Design Approval Status"
                            dataIndex="TargetDateOFNextMilestone"
                            key="TargetDateOFNextMilestone"
                            ellipsis={true}
                        />
                        <Column
                            title="Design Approval Date"
                            dataIndex="DesignApproval"
                            key="DesignApproval"
                            ellipsis={true}
                        />
                        {/*}
                        <Column
                            title="Next Miletone RAG Status"
                            dataIndex="NextMiletoneRAGStatus"
                            key="NextMiletoneRAGStatus"
                            ellipsis={true}
                        />
                        <Column
                            title="Target Overall Delivery"
                            dataIndex="TargetOverallDelivery"
                            key="TargetOverallDelivery"
                            ellipsis={true}
                        />
                        <Column
                            title="OverallDeliveryRAG Status"
                            dataIndex="OverallDeliveryRAGStatus"
                            key="OverallDeliveryRAGStatus"
                            ellipsis={true}
                        />
                            */}
                    </ColumnGroup>
                </DataTable>
            </CardContainer>
        )
    }

    private renderTableAction() {
        return (
            <LabelContainer column={3} colon>
                <LabelContainer.Item label="Demand Action" labelWidth={120}>
                    <Button
                        type="primary"
                        style={{ width: 100 }}
                        onClick={() => this.openSuccessModal()}
                    >
                        Approve
                    </Button>
                    <Button style={{ width: 100 }}>Reject</Button>
                </LabelContainer.Item>
                <LabelContainer.Item label="Design Action" labelWidth={120}>
                    <Button
                        type="primary"
                        style={{ width: 100 }}
                        onClick={() => this.openSuccessModal()}
                    >
                        Approve
                    </Button>
                    <Button style={{ width: 100 }}>Reject</Button>
                </LabelContainer.Item>
            </LabelContainer>
        )
    }
    private openForm() {
        this.props.history.push('/pages/demand-request-form-detail')
    }
    private openSuccessModal() {
        this.setState({
            successModalVisible: true
        })
    }
    private closeSuccessModal() {
        this.setState({
            successModalVisible: false
        })
    }
    private renderFormAction() {
        return (
            <>
                <Button type="primary" danger>
                    Search
                </Button>
            </>
        )
    }
}
