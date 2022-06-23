from django.contrib import admin
from django.urls import path, include, re_path
import re

from django.conf import settings
from django.conf.urls.static import static, serve
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    re_path(r'^%s(?P<path>.*)$' % settings.STATIC_URL, serve)
]
print(settings.STATIC_URL)
urlpatterns += static(settings.MEDIA_URL)
urlpatterns += static(settings.STATIC_URL)
