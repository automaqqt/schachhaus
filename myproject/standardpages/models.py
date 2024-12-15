from django.db import models
from wagtail.admin.panels import FieldPanel, InlinePanel, MultiFieldPanel
from wagtail.fields import RichTextField
from wagtail.search import index
from django.utils.safestring import mark_safe

from wagtail.fields import StreamField
from myproject.utils.blocks import StoryBlock
from myproject.utils.models import BasePage, ChessBoardSnippet, ChessSquare



class StandardPage(BasePage):
    template = "pages/standard_page.html"

    introduction = RichTextField(blank=True)
    display_table_of_contents = models.BooleanField(default=True)
    body = StreamField(StoryBlock())
    featured_section_title = models.TextField(blank=True)

    search_fields = BasePage.search_fields + [index.SearchField("introduction")]

    content_panels = BasePage.content_panels + [
        FieldPanel("introduction"),
        FieldPanel("display_table_of_contents"),
        FieldPanel("body"),
        MultiFieldPanel(
            [
                FieldPanel("featured_section_title", heading="Title"),
                InlinePanel(
                    "page_related_pages",
                    label="Pages",
                    max_num=3,
                ),
            ],
            heading="Featured section",
        ),
    ]


class IndexPage(BasePage):
    template = "pages/index_page.html"

    introduction = RichTextField(blank=True)
    body = StreamField(StoryBlock(), blank=True)

    search_fields = BasePage.search_fields + [index.SearchField("introduction")]

    content_panels = BasePage.content_panels + [
        FieldPanel("introduction"),
        InlinePanel(
            "page_related_pages",
            label="Featured pages",
            min_num=3,
            max_num=12,
        ),
        FieldPanel("body")
    ]




class SponsorBoardPage(BasePage):
    board = models.OneToOneField(
        ChessBoardSnippet,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="page",
    )
    
    content_panels = BasePage.content_panels + [
        FieldPanel("board"),
    ]

    template = "pages/sponsor_board_page.html"

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)

        # Create a dictionary of positions to square details
        occupied_positions = {
            square.position: {
                'name': square.name,
                'sponsoring_since': square.sponsoring_since,
                'picture': square.picture,
                'website': square.website,
            }
            for square in ChessSquare.objects.filter(board_id=self.board.id)
        }

        context['occupied_positions'] = occupied_positions
        return context

class CalendarPage(BasePage):
    
    template = "pages/planer_page.html"


    