﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace fec_prez_money_detail.FECFundingReference {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="CandidateCommitteeContriDataContract", Namespace="http://schemas.datacontract.org/2004/07/PrezContributionService")]
    [System.SerializableAttribute()]
    public partial class CandidateCommitteeContriDataContract : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string AMNDT_INDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CAND_IDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CITYField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CMTE_IDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string EMPLOYERField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ENTITY_TPField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string FILE_NUMField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string IMAGE_NUMField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string MEMO_CDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string MEMO_TEXTField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string NAMEField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string OCCUPATIONField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string OTHER_IDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string RPT_TPField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string STATEField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string SUB_IDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string TRANSACTION_AMTField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string TRANSACTION_DTField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string TRANSACTION_PGIField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string TRANSACTION_TPField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string TRAN_IDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ZIP_CODEField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string AMNDT_IND {
            get {
                return this.AMNDT_INDField;
            }
            set {
                if ((object.ReferenceEquals(this.AMNDT_INDField, value) != true)) {
                    this.AMNDT_INDField = value;
                    this.RaisePropertyChanged("AMNDT_IND");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CAND_ID {
            get {
                return this.CAND_IDField;
            }
            set {
                if ((object.ReferenceEquals(this.CAND_IDField, value) != true)) {
                    this.CAND_IDField = value;
                    this.RaisePropertyChanged("CAND_ID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CITY {
            get {
                return this.CITYField;
            }
            set {
                if ((object.ReferenceEquals(this.CITYField, value) != true)) {
                    this.CITYField = value;
                    this.RaisePropertyChanged("CITY");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CMTE_ID {
            get {
                return this.CMTE_IDField;
            }
            set {
                if ((object.ReferenceEquals(this.CMTE_IDField, value) != true)) {
                    this.CMTE_IDField = value;
                    this.RaisePropertyChanged("CMTE_ID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string EMPLOYER {
            get {
                return this.EMPLOYERField;
            }
            set {
                if ((object.ReferenceEquals(this.EMPLOYERField, value) != true)) {
                    this.EMPLOYERField = value;
                    this.RaisePropertyChanged("EMPLOYER");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ENTITY_TP {
            get {
                return this.ENTITY_TPField;
            }
            set {
                if ((object.ReferenceEquals(this.ENTITY_TPField, value) != true)) {
                    this.ENTITY_TPField = value;
                    this.RaisePropertyChanged("ENTITY_TP");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string FILE_NUM {
            get {
                return this.FILE_NUMField;
            }
            set {
                if ((object.ReferenceEquals(this.FILE_NUMField, value) != true)) {
                    this.FILE_NUMField = value;
                    this.RaisePropertyChanged("FILE_NUM");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string IMAGE_NUM {
            get {
                return this.IMAGE_NUMField;
            }
            set {
                if ((object.ReferenceEquals(this.IMAGE_NUMField, value) != true)) {
                    this.IMAGE_NUMField = value;
                    this.RaisePropertyChanged("IMAGE_NUM");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string MEMO_CD {
            get {
                return this.MEMO_CDField;
            }
            set {
                if ((object.ReferenceEquals(this.MEMO_CDField, value) != true)) {
                    this.MEMO_CDField = value;
                    this.RaisePropertyChanged("MEMO_CD");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string MEMO_TEXT {
            get {
                return this.MEMO_TEXTField;
            }
            set {
                if ((object.ReferenceEquals(this.MEMO_TEXTField, value) != true)) {
                    this.MEMO_TEXTField = value;
                    this.RaisePropertyChanged("MEMO_TEXT");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string NAME {
            get {
                return this.NAMEField;
            }
            set {
                if ((object.ReferenceEquals(this.NAMEField, value) != true)) {
                    this.NAMEField = value;
                    this.RaisePropertyChanged("NAME");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string OCCUPATION {
            get {
                return this.OCCUPATIONField;
            }
            set {
                if ((object.ReferenceEquals(this.OCCUPATIONField, value) != true)) {
                    this.OCCUPATIONField = value;
                    this.RaisePropertyChanged("OCCUPATION");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string OTHER_ID {
            get {
                return this.OTHER_IDField;
            }
            set {
                if ((object.ReferenceEquals(this.OTHER_IDField, value) != true)) {
                    this.OTHER_IDField = value;
                    this.RaisePropertyChanged("OTHER_ID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string RPT_TP {
            get {
                return this.RPT_TPField;
            }
            set {
                if ((object.ReferenceEquals(this.RPT_TPField, value) != true)) {
                    this.RPT_TPField = value;
                    this.RaisePropertyChanged("RPT_TP");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string STATE {
            get {
                return this.STATEField;
            }
            set {
                if ((object.ReferenceEquals(this.STATEField, value) != true)) {
                    this.STATEField = value;
                    this.RaisePropertyChanged("STATE");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string SUB_ID {
            get {
                return this.SUB_IDField;
            }
            set {
                if ((object.ReferenceEquals(this.SUB_IDField, value) != true)) {
                    this.SUB_IDField = value;
                    this.RaisePropertyChanged("SUB_ID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string TRANSACTION_AMT {
            get {
                return this.TRANSACTION_AMTField;
            }
            set {
                if ((object.ReferenceEquals(this.TRANSACTION_AMTField, value) != true)) {
                    this.TRANSACTION_AMTField = value;
                    this.RaisePropertyChanged("TRANSACTION_AMT");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string TRANSACTION_DT {
            get {
                return this.TRANSACTION_DTField;
            }
            set {
                if ((object.ReferenceEquals(this.TRANSACTION_DTField, value) != true)) {
                    this.TRANSACTION_DTField = value;
                    this.RaisePropertyChanged("TRANSACTION_DT");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string TRANSACTION_PGI {
            get {
                return this.TRANSACTION_PGIField;
            }
            set {
                if ((object.ReferenceEquals(this.TRANSACTION_PGIField, value) != true)) {
                    this.TRANSACTION_PGIField = value;
                    this.RaisePropertyChanged("TRANSACTION_PGI");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string TRANSACTION_TP {
            get {
                return this.TRANSACTION_TPField;
            }
            set {
                if ((object.ReferenceEquals(this.TRANSACTION_TPField, value) != true)) {
                    this.TRANSACTION_TPField = value;
                    this.RaisePropertyChanged("TRANSACTION_TP");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string TRAN_ID {
            get {
                return this.TRAN_IDField;
            }
            set {
                if ((object.ReferenceEquals(this.TRAN_IDField, value) != true)) {
                    this.TRAN_IDField = value;
                    this.RaisePropertyChanged("TRAN_ID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ZIP_CODE {
            get {
                return this.ZIP_CODEField;
            }
            set {
                if ((object.ReferenceEquals(this.ZIP_CODEField, value) != true)) {
                    this.ZIP_CODEField = value;
                    this.RaisePropertyChanged("ZIP_CODE");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="FECFundingReference.IFECFunding")]
    public interface IFECFunding {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IFECFunding/GetCandidatebasedFunding", ReplyAction="http://tempuri.org/IFECFunding/GetCandidatebasedFundingResponse")]
        fec_prez_money_detail.FECFundingReference.CandidateCommitteeContriDataContract[] GetCandidatebasedFunding();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IFECFunding/GetCandidatebasedFunding", ReplyAction="http://tempuri.org/IFECFunding/GetCandidatebasedFundingResponse")]
        System.Threading.Tasks.Task<fec_prez_money_detail.FECFundingReference.CandidateCommitteeContriDataContract[]> GetCandidatebasedFundingAsync();
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IFECFundingChannel : fec_prez_money_detail.FECFundingReference.IFECFunding, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class FECFundingClient : System.ServiceModel.ClientBase<fec_prez_money_detail.FECFundingReference.IFECFunding>, fec_prez_money_detail.FECFundingReference.IFECFunding {
        
        public FECFundingClient() {
        }
        
        public FECFundingClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public FECFundingClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public FECFundingClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public FECFundingClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public fec_prez_money_detail.FECFundingReference.CandidateCommitteeContriDataContract[] GetCandidatebasedFunding() {
            return base.Channel.GetCandidatebasedFunding();
        }
        
        public System.Threading.Tasks.Task<fec_prez_money_detail.FECFundingReference.CandidateCommitteeContriDataContract[]> GetCandidatebasedFundingAsync() {
            return base.Channel.GetCandidatebasedFundingAsync();
        }
    }
}
