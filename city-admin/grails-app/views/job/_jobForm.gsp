<div class="row-fluid">
    <div class="span12">
        <fieldset>
            <ul class="form-list label-left list-bordered dotted">
                <li class="section-form">
                    <h4>Job Info</h4>
                </li>
                <f:all bean="job" except="likes,page,entryLike,slug,tags"/>
                <f:field property="tags" bean="${tagType}" value="${job?.tags}" />
            </ul>
        </fieldset>
        <!-- // fieldset Input -->
        <div class="form-actions">
            <button type="submit" class="btn btn-primary btn-right">Submit</button>

        </div>
    </div>
</div>