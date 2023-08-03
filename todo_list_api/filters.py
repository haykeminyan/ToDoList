from rest_framework.filters import SearchFilter
from rest_framework.pagination import PageNumberPagination


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'page_size'
    max_page_size = 50
    page_query_param = 'p'


class SearchResultsSet(SearchFilter):
    search_fields = ['username']
