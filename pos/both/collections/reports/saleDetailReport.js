/**
 * Schema
 */
Pos.Schema.SaleDetailReport = new SimpleSchema({
    locationId: {
        type: String,
        label: "Location",
        autoform: {
            type: "select2",
            options: function () {
                return Pos.ListForReport.locations();
            }
        },
        optional:true
    },
    categoryId: {
        type: String,
        label: "Category",
        autoform: {
            type: "select2",
            options: function () {
                return Pos.List.category("All");
            }
        },
        optional:true
    },
    customerId:{
        type:String,
        label:"Customer",
        autoform: {
            type: "select2",
            options:function(){
                return Pos.List.customer();
            }
        },
        optional:true

    },
    date: {
        type: String,
        label: "Date"
    },

    staffId:{
        type:String,
        label:"Staff",
        autoform: {
            type: "select2",
            options:function(){
                return Pos.List.staff();
            }
        },
        optional:true
    },
    branch:{
        type:String,
        label:"Branch",
        autoform: {
            type: "select2",
            options:function(){
                return Pos.List.branchForUser();
            }
        },
        optional:true
    }
});