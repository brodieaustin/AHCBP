      function makeLink(form, location){
        var link_type;
        /*run through link_type values and see which one is selected */
        for (var i = 0; i < form["link_type"].length; i++)
          if (form["link_type"][i].checked) link_type = form["link_type"][i].value;

        var state = form["state_select"].value;
        var link;
	
        /* conditional statements to build link based on the link_type */
        if (link_type == "state_page") {
          link = location + "statepages/" + state.split(";")[1] + ".html";
        }
        else if (link_type== "map") {
          link = "http://historical-county.newberry.org/website/" + state.split(";")[1] + "/viewer.htm";
        }
        else if (link_type == "metadata"){
          link = location + "documents/" + state.split(";")[0] + "_Metadata1.htm";
        }
        else {
          link = "";
        }
        
        return link;
      }

      function followLink(form, location){
        var link = makeLink(form, location);

        if (link != ""){ 
          /*open the link in the same window*/ 
          window.open(link, "_self");
        }
      }