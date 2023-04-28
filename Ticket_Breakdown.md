# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1 - Refactor Agent Creation and Update functionalities
Description:

- FacilityAgentId column needs to be created in Agents table. It will be nullable. Not every facility will have this data.
- Refactor Agent Creation functions to have FacilityAgentId field to be able to store in Agents table.
- Refactor Agent Update functions to have FacilityAgentId field to be able to update in Agents table.
  
  Estimation: 8h
  
  Acceptance Criteria:
- As a user I want to set FacilityAgentId value for each agent in Agent Creation flow so that I can use this data in reports.
- As a user I want to update FacilityAgentId value for each agent in Update Agent Profile flow so that I can use this data in reports.

2 - Update of getShiftsByFacility function
Description:

- Update of getShiftsByFacility function so that it returns FacilityAgentId about the Agent assigned to each shift data.
  
  Estimation: 5h
  
  Acceptance Criteria:
- As a user I want to call getShiftsByFacility by FacilityId so that I can see new FacilityAgentId values in the response data which contains all Shifts worked that quarter, including some metadata about the Agent assigned to each.

3 - Update of generateReport function
Description:

- Update of generateReport function for getting FacilityAgentId data and use that id as well when generating reports for them.
  
  Estimation: 5h
  
  Acceptance Criteria:
- As a user I want to call generateReport so that I can see new FacilityAgentId values in the generated report.
