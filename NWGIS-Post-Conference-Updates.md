After a NWGIS Conference Completes this maintenance is needed
================================
-	Add new product for next year and disable prior year.  e.g. added “member2016” and disable “member2015”https://nwgis.org/admin/commerce/products
-	Update "Membership" product display for new product.  e.g. updated to “member2016” from "member2015" https://nwgis.org/membership
-	Code updated to correctly update history table after purchase https://github.com/stupiddingo/nwgis/commit/293e569d6dba2e802cce9f869428987bdbc41c49
- Update view on https://nwgis.org/members to allow new year as choice
-	If any memberships of “member2015” were accidentally purchased after the NWGIS2015 conference updated to “member2016” and their associated records in the “nwgis_membership” table (membership history log) updated.
- Obtain an export of conference registrants with email addresses if an externally organized conference (URISA hosted)
  - Export user (accounts) from nwgis site https://nwgis.org/user/manage
  - Using Access or what works for you, compare conference registrants and user accounts. Join on related fields and add uid:
    - join on email and add uid to conference table
    - double join on first and last name, check organization and location to try to avoid incorrect matches and add uid to conference table
    - join on just first and then just last and compare matches, if you determine same person manually add uid, e.g. bob tom same as robert tom.
  - edit conference table so it matches nwgis_membership data table structure adding fields for member, conference and product https://nwgis.org/admin/content/data/view/nwgis_membership
  - using mysql phpadmin open nwgis_conference and use import to bring in records.  Easiest method is to make sure your data has all the same fields. Values can be null.
```
"id","uid","last","first","email","organization","member","conference","product","designation","position","address1","address2","city","state","postal","country","phone"
,1044,"Washington","George","george@america.gov","Continental Army",2016,"2015 URISA GIS-Pro/NWGIS Conference - Spokane, WA","2015 Conference Registration",,,"123 Main St",,"Washington","WA","98000","US",
```
