@extends('roles.base_index')

@section('pageSubtitle', uppercase(trans('roles.title')))

@section('content_sortable_links')
    <th class="content-list__cell content-list__cell--head">
        {!! sortable_link('label', uppercase(trans('validation.attributes.label'))) !!}
    </th>
    <th class="content-list__cell content-list__cell--head">
        {!! sortable_link('name', uppercase(trans('validation.attributes.name'))) !!}
    </th>
@endsection

@section('content_list')
    @include('roles.list')
@endsection

@section('content_footer')
    @include('partials.contents.pagination', ['paginator' => $roles])
@endsection