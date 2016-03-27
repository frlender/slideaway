var app = angular.module('chart', ['indexCtrl']);

// workaround to manipulate $scope in tagTable control from searchBox
// var g= {};
// g.query = {};
// g.query.pert = {};
// g.query.pert.items = [];
// g.query.pert.idx = [];
// g.query.cell = {};
// g.query.cell.items = [];
// g.query.cell.idx = [];
var herald = {};


var indexCtrl = angular.module('indexCtrl',['services']);
indexCtrl.controller('expand',['$scope','Pagination',function($scope,Pagination){
	$scope.log = function(cc){console.log(cc)};
	$scope.expand = function($event,item){
		if(item.expanded)
			$($event.currentTarget).next().slideDown(500);
		else
			$($event.currentTarget).next().slideUp(500);
	}
	$scope.switchTo=function(name){
		$scope.item=$scope[name];
		$scope.current = name;
	}
	$scope.format = function(item){
		return Array.isArray(item.data)?item.data.join(', '):item.data;
	}
	$scope.isLongArray = function(item){
		var isLongArray = Array.isArray(item.data) && item.data.length>10;
		if(isLongArray) item.pagination = new Pagination(3);
		return isLongArray;
	}
	$scope.test = function(){
		console.log($scope);
	}
	// $scope.data = [{'title':'abc def','items':[{'title':'b'},{'title':'c','last':true}]}];
	$scope.descs = {
		'L1000':'A gene expression profiling assay based on the direct measurement of a reduced representation of the transcriptome of 1000 genes and computational inference of the rest genes from a linear model.',
		'RNA-seq':'A gene expression assay that uses next-generation sequencing (NGS) to reveal the presence and quantity of RNA in a biological sample at a given moment in time.',
		'GCP':'Global chromatin profiling is a mass spectrometry-based assay to identify and quantify post-translational modifications on histone proteins from bulk chromatin.',
		'ATAC-seq':'An assay used in molecular biology to study chromatin accessibility. It aims to identify accessible DNA regions, equivalent to DNase I hypersensitive sites.',
		'P100':'A targeted phosphoproteomic assay based on the direct measurement of a reduced representation of the phosphoprofiling of 96 phosphopeptide probes.',
		'SWATH-MS':'A data independent acquisition (DIA) method which aims to complement traditional mass spectrometry-based proteomics techniques such as shotgun and SRM methods. In essence, it allows a complete and permanent recording of all fragment ions of the detectable peptide precursors present in a biological sample.',
		'Mass-Spec (Sinai)':'An analytical technique that sorts ions based on their mass. It can be used to characterize and sequence proteins.',
		'Mass-Spec (Harvard)':'An analytical technique that sorts ions based on their mass. It can be used to characterize and sequence proteins.',
		'RPPA':'Reverse phase protein array (RPPA) is a high-throughput antibody-based technique developed for Functional Proteomics studies to evaluate protein activities in signaling networks.',
		'MEMA':'An assay for cell-based functional screening of interactions with combinatorial microenvironments.',
		'Viability':'An assay to determine the ability of cells to maintain or recover viability upon drug treatment.',
		'Immunofluorescence': 'A technique that uses the specificity of antibodies to their antigen to target fluorescent dyes to specific biomolecule targets within a cell, and therefore allows visualisation of the distribution of the target molecule through the sample.',
		'Neurolincs (Imaging)':'An assay to monitor cell survival in control, ALS, and SMA iMNs. iMNs will be transfected with a fluorescence reporter and imaged daily for 10 days.',
		'KinomeScan':'An assay to measure interactions of kinase inhibitors with kinases.',
		'Proteomics':'Mass-spec assay that sorts ions based on their mass. It can be used to characterize and sequence proteins.'
	}

	$scope.byAssay =
		{'title':"By Assay",
		'expanded':true,
		'initExpanded':true,
		 'desc':'',
		 'items':[
		 	{'title':'Transcriptomics',
		 	 'desc':'',
		 	 'expanded':true,
		 	 'items':[
		 	 	{'title':'L1000','desc':'','datasets':[]},
		 	 	{'title':'RNA-seq','desc':'','datasets':[]},
		 	 ]},
		 	 {'title':'Epigenomics',
		 	 'desc':'',
		 	 'expanded':true,
		 	 'items':[
		 	 	{'title':'GCP','desc':'','datasets':[]},
		 	 	{'title':'ATAC-seq','desc':'','datasets':[]},
		 	 ]},
		 	 {'title':'Proteomics',
		 	 'desc':'None',
		 	 'expanded':true,
		 	 'items':[
		 	 	{'title':'GCP','desc':'','datasets':[]},
		 	 	{'title':'P100','desc':'','datasets':[]},
		 	 	{'title':'SWATH-MS','desc':'','datasets':[]},
		 	 	{'title':'Mass-Spec (Sinai)','desc':'','datasets':[]},
		 	 	{'title':'Mass-Spec (Harvard)','desc':'','datasets':[]},
		 	 	{'title':'RPPA','desc':'','datasets':[]},
		 	 ]},
		 	  {'title':'Imaging',
		 	 'desc':'',
		 	 'expanded':true,
		 	 'items':[
		 	 	{'title':'MEMA','desc':'','datasets':[]},
		 	 	{'title':'Viability','desc':'','datasets':[]},
		 	 	{'title':'Immunofluorescence','desc':'','datasets':[]},
		 	 	{'title':'Neurolincs (Imaging)','desc':'','datasets':[]},
		 	 ]},
		 	  {'title':'Binding Assay',
		 	 'desc':'',
		 	 'expanded':true,
		 	 'items':[
		 	 	{'title':'KinomeScan','desc':'','datasets':[]}
		 	 ]}
		 ]
		}
 $scope.byCenter = 
		{'title':"By Center",
		'expanded':true,
		'initExpanded':true,
		 'desc':'',
		 'style':"'header'",
		 'items':[
		 	{'title':'Connectivity Map',
		 	'expanded':true,
		 	 'img':{
		 	 	'src':'T.png',
		 	 	'height':'29px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'L1000','desc':'','datasets':{
		 	 		'headers':['Download','ID','Assay Type', 'Tissue','Cell','Small Molecule','Disease'],
		 	 		'items':[
		 	 			[
		 	 				{'data':'URL'},
		 	 				{'data':'LDS-1202'},
		 	 				{'data':'Transcriptomics'},
		 	 				{'data':['Breast','Prostate']},
		 	 				{'data':['BT-20', 'LNCaP', 'SK-BR-3', 'MDA-MB-231', 'MCF7', 'Hs578T']},
		 	 				{'data':['LSM-1079','LSM-1064','LSM-1047','LSM-5068','LSM-1183','LSM-1057','def','abc','ccd','dd','eeff','kkk']},
		 	 				{'data':['Breast carcinoma, Prostate carcinoma', 'Breast adenocarcinoma', 'Breast invasive ductal carcinoma']},
		 	 			]
		 	 		]
		 	 	}}
		 	 ]},
		 	 {'title':'LINCS PCCSE',
		 	 'expanded':true,
		 	 'img':{
		 	 	'src':'P.png',
		 	 	'height':'27px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'P100','desc':'','datasets':[]},
		 	 	{'title':'GCP','desc':'','datasets':[]},
		 	 ]},
		 	 {'title':'HMS LINCS',
		 	 'expanded':true,
		 	 'desc':'',
		 	 'img':{
		 	 	'src':'H.png',
		 	 	'height':'30px'
		 	 },
		 	 'items':[
		 	 	{'title':'Immunofluorescence','desc':'','datasets':[]},
		 	 	{'title':'Viability','desc':'','datasets':[]},
		 	 	{'title':'KinomeScan','desc':'','datasets':[]},
		 	 	{'title':'Proteomics','desc':'','datasets':[]}
		 	 ]},
		 	  {'title':'MEP LINCS',
		 	  'expanded':true,
		 	  'img':{
		 	 	'src':'M.png',
		 	 	'height':'28px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'MEMA','desc':'','datasets':[]},
		 	 	{'title':'RPPA','desc':'','datasets':[]},
		 	 ]},
		 	 {'title':'NeuroLINCS',
		 	 'expanded':true,
		 	'img':{
		 	 	'src':'N.png',
		 	 	'height':'15px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'ATAC-seq','desc':'','datasets':[]},
		 	 	{'title':'RNA-seq','desc':'','datasets':[]},
		 	 	{'title':'SWATH-MS','desc':'','datasets':[]},
		 	 	{'title':'Imaging','desc':'','datasets':[]}		 	 
		 	 ]},
		 	 {'title':'DToxS',
		 	 'expanded':true,
		 	 'img':{
		 	 	'src':'D.png',
		 	 	'height':'29px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'RNA-seq','desc':'','datasets':[]},
		 	 	{'title':'Proteomics','desc':'','datasets':[],'last':true},
		 	 ]}
		 ]
		};
}]);