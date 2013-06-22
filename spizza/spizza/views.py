from django.shortcuts import render
from django.http import HttpResponseRedirect

def main(request):
    if not request.user:
        return HttpResponseRedirect('/auth/login/linkedin')
    return render(request, 'main.html', {
        'user_name' : request.user.username,
        'user_id' : request.user.id,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name
    })
