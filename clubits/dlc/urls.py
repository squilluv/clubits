from rest_framework import routers
from .api import CourseViewSet, CourseGroupViewSet, CourseItemViewSet, CourseLiterViewSet, CoursePoViewSet, TeachGroupStudentViewSet, TeachGroupViewSet, SectionsViewSet, TeachPlanViewSet, VisitedViewSet, VisitedStudentsViewSet, ContractViewSet, MessagesViewSet

router = routers.DefaultRouter()
router.register('api/course', CourseViewSet, 'course')
router.register('api/coursegroup', CourseGroupViewSet, 'coursegroup')
router.register('api/courseitem', CourseItemViewSet, 'courseitem')
router.register('api/courseliter', CourseLiterViewSet, 'courseliter')
router.register('api/coursepo', CoursePoViewSet, 'coursepo')
router.register('api/teachgroup', TeachGroupViewSet, 'teachgroup')
router.register('api/teachgroupstudent', TeachGroupStudentViewSet, 'teachgroupstudent')
router.register('api/sections', SectionsViewSet, 'sections')
router.register('api/teachplan', TeachPlanViewSet, 'teachplan')
router.register('api/visited', VisitedViewSet, 'visited')
router.register('api/visitedstudents', VisitedStudentsViewSet, 'visitedstudents')
router.register('api/contract', ContractViewSet, 'contract')
router.register('api/messages', MessagesViewSet, 'messages')

urlpatterns = router.urls
