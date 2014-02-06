# Importing/Exporting

## Where do we start?
### What can we actually do with the ZOO import / export system

ZOO is a wonderful CCK for Joomla; however, the import/export functionality is designed in a way that it is not possibly to just 'click a button' and have data imported or exported into or out of any custom element (it also can't handle several types of core ZOO elements).

There are some limitations, and even some ways to get around those limitations that will give you some functionality beyond what the core ZOO system provides.

PLEASE NOTE - the steps provided in this document require you to have at least some basic php code editing ability (and a good code editor). In addition the steps that are indicated here require you to change core ZOO files. That means that you should backup the files that you are changing before you start to a place where you can easily recover them when things go wrong. And you will also need to keep a copy of the final changed version so that when you upgrade ZOO in the future you can re-apply the changes (they will be wiped out with any future ZOO upgrade).

And as always, you make changes to the core ZOO files at your own risk. If you make a mistake in this process you could damage or loose part or all of your data. Again, backup early and often - your ENTIRE site.

About the import type

Throughout this document when we talk about importing and exporting we will be using the CSV data format. ZOO has the ability to import/export data in JSON format; however, addressing that type of data handling is not covered in this document.

## Importing - What you can do (And what you can't do)

If you have your data in an existing CSV file (or in a spreadsheet that you can save as CSV) you can import your data into ZOO if you import it into STANDARD ZOO elements. You can NOT import directly into a ZOOlander (or any other custom) ZOO element. There IS a way to get the data into a ZOOlander pro element version of standard ZOO elements - we'll get to that in a minute.

PLEASE NOTE - it is not advised to attempt to re-import data into ZOO that is already there (i.e. using the import system to 'update' existing data). Although there is some theoreticaly likelyhood that you might be able to make it work, our experience is that this is not a 100% reliable option at this time. Because of this we strongly recommend that you spend extra time in the 'design' phase of your data structures. Make sure that you have completely mapped out what elements you will need for your app types and know what types will be used for each piece of data being imported.


## Importing - How to do it

As noted earlier, you can't just import data directly into ZOOlander pro elements. Here are the steps that you must take to get CSV data into ZOOlander pro elements (as well as any standard elements).

1.  Map your data structures, review the structures and revise (make sure that you have thought of any potential future needs so that you don't miss some functionality or need to re-work extensive release systems and/or loose data.
2.  Prepare and/or clean-up your data to be imported:  
    * Review CSV file for duplicate entries (remove any completely duplicate entries)  
    * Ensure that you have headers (column titles) in the first row of your data set  
    * Check the formatting of the CSV file (i.e. the separator character must be "," and text should use " and " (double quotes) as text delimiters (depending on the content of your fields)
3.  Build your ZOO type using STANDARD ZOO ELEMENTS for any field where you need to import data. You can NOT import directly into a ZOOlander Pro element. (We'll 'upgrade' these elements to their pro version after you import the data - without loosing any data in the elements.)
4.  Import the data:
  1. Open the App instance tab in ZOO where you want to import the data
  2. Click the CONFIG tab for that app instance
  3. Click the Import / Export button
  4. Click  the SEARCH button in the Import from CSV area
  5. Locate and select the CSV file from your local drive
  6. Click the green Upload button
  7. Confirm (or modify) the File Details as needed and click the NEXT button
  8. Select the ZOO Type that you will be importing into for this file's data
  9. For each field of the CSV file that is listed on the left of the import screen, select a ZOO element using the drop-down selectors along the right.
    * Note: If an element or attribute doesn't appear in the selector it means that ZOO cannot import into that element/attribute type
  10. Click the Import button to begin the import
5. Upgrade any ZOO standard elements that you used to the ZOOlander Pro version. Check individual Element documentation for instructions on upgrading.

That's all there is to it. Your data should now be imported and available in the ZOO standard or ZOOlander pro elements.

## Exporting - What you can do (And what you can't do)

Unfortunately, due to the features that are added by ZOOlander pro elements and the limitations of the core ZOO export you presently only have two options for exporting data from ZOO.

First - you can **downgrade** your existing ZOOlander pro element to a standard ZOO element (reversing the steps you followed while Switching to Pro). That unfortunately will cause you to loose some of your data when exporting. 

NOTE: The loss indicated here is not just related to element configuration settings that are made available by the pro element but also data that may have been entered into a pro element that add the **Repeatable** functionality where the standard element doesn't offer it (like in the Text/Textarea Pro elements).

Second - you can just run the export process and you will only get the standard elements which the ZOO exporter is designed to handle.

##Isn't there ANY better way to Import / Export

Unfortunately, there isn't presently any better solution for importing/exporting data into/out of ZOO. However, we've heard your requests and experienced this limitation ourselves. We've got it on our wishlist for a solution at some point in the future.

Our ideal solution will allow you to import/export without requiring you to 'hack' the core ZOO (or Joomla) code.